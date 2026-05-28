import { render, screen, userEvent } from '@testing-library/react-native';
import { Task } from '../components/Task';
import { PortalHost } from '@rn-primitives/portal';

describe('Task', () => {
  test('renders a task', () => {
    const task = {
      id: 1,
      title: 'Test Task',
      category: 'Test Category',
      isChecked: false,
    };

    render(<Task task={task} />);

    // Just check if the title and category are displayed
    const titleElement = screen.getByText('Test Task');
    const categoryElement = screen.getByText('Test Category');
    expect(titleElement).toBeTruthy();
    expect(categoryElement).toBeTruthy();
  });
  test("toggles completion status when pressed", async () => {
    const task = {
      id: 2,
      title: "Test Task",
      category: "Test Category",
      isChecked: false,
    };

    render(<Task task={task} />);

    const checkbox = screen.getByTestId("checkbox"); // Find the checkbox element

    const user = userEvent.setup();
    await user.press(checkbox);

    expect(checkbox).toBeChecked();
  });
  test('toggles from checked to unchecked when pressed', async () => {
    // Your code here...
    const task = {
      id: 3,
      title: "Test Task",
      category: "Test Category",
      isChecked: true,
    };

    render(<Task task={task} />);

    const checkbox = screen.getByTestId("checkbox"); // Find the checkbox element

    const user = userEvent.setup();
    await user.press(checkbox);

    expect(checkbox).not.toBeChecked();
  });
  test('checks if dialogue box is not open', async () => {
    const task = {
      id: 4,
      title: 'Test Task',
      category: 'Test Category',
      isChecked: true,
    };

    render(<Task task={task}/>);
    
    const dialogueTitle = screen.queryByTestId('Save Changes');
    expect(dialogueTitle).toBeNull();
  })
  test('displays the edit dialog when a task is pressed', async () => {
  const task ={
    id: 5,
    title: 'Test Task',
    category: 'Test Category',
    isChecked: true,
  };
  render(
    <>
      <Task task={task}/>
      <PortalHost />
    </>
  );

  const taskTrigger = screen.getByTestId('task-trigger');

  // Fixed: use queryByTestId (not queryAllByTestId)
  expect(screen.queryByTestId('dialogue-header')).toBeNull();

  const user = userEvent.setup();
  await user.press(taskTrigger);

  const dialogueHeader = await screen.findAllByTestId('dialogue-header');

  // Fixed: check array length
  expect(dialogueHeader).toHaveLength(1);
});
test('calls onDelete when delete button is pressed', async () => {
  const mockOnDelete = jest.fn();
  const task = {
    id: 6,
    title: 'Task to Delete',
    category: 'Test Category',
    isChecked: false,
  };

  render(<Task task={task} onDelete={mockOnDelete} />);

  const user = userEvent.setup();
  const deleteButton = screen.getByText('X');
  
  await user.press(deleteButton);

  expect(mockOnDelete).toHaveBeenCalledWith(6);
  expect(mockOnDelete).toHaveBeenCalledTimes(1);
});
});
