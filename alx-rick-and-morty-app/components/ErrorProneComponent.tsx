const ErrorProneComponent: React.FC = () => {
    throw new Error("This is a test error.");
    return <div>This will not be displayed.</div>;
}
export default ErrorProneComponent;