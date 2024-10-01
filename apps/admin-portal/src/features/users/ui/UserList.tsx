import { BooleanField, Datagrid, DateField, FunctionField, List, TextField } from 'react-admin';

const UserList = () => (
  <List resource="users" empty={<div>empty users list</div>}>
    <Datagrid>
      <FunctionField label="Name" render={(record) => `${record.first_name} ${record.last_name}`} />
      <TextField source="nickname" />
      <TextField source="user_email" label="Email" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <BooleanField source="deleted" />
    </Datagrid>
  </List>
);

export { UserList };
