import ToDoTable from "./ToDoTable"

export default function UserProfile() {
    return (
        <div className="container">
            <h1>User Profile!</h1>
            <ToDoTable />
            <sm><em>This page is currently in beta. Features may or may not work as expected.</em></sm>
        </div>
    )
}