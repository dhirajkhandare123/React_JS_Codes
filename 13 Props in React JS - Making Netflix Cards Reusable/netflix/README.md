# Props
1. In React.js, "props" are essentially a way to pass information from a parent component to a child component.
2. Information Transfer: Their primary job is to carry data.
3. One-Way Flow: Information always flows from parent to child. A child component cannot directly modify the props it receives from its parent. This is called "unidirectional data flow."
4. Read-Only: Props are read-only within the child component. You can't change them inside the child. If the data needs to change, the parent component is responsible for updating its own state (its internal data) and then re-passing the updated props to the child.
5. Customization: They allow you to make reusable components more flexible. You can use the same Button component, for example, but give it different text or color props to display different buttons.

### In these code key props is very important
### whenever you use map() method you have to use key props