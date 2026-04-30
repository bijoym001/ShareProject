import UsersTable from '../components/UsersTable';

export default function Users() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Users Management</h2>
          <p className="text-gray-500 mt-1">Manage all users and their roles</p>
        </div>
      </div>
      <UsersTable />
    </div>
  );
}