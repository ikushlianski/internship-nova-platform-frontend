import { ClassesTab } from '../ui/tabs/ClassesTab';
import { CRMTab } from '../ui/tabs/CRMTab';
import { DocsTab } from '../ui/tabs/DocsTab';
import { PurchasesTab } from '../ui/tabs/PurchasesTab';
import { RequestsTab } from '../ui/tabs/RequestsTab';

export const tabs = ['Classes', 'Requests', 'Purchases', 'Docs', 'CRM'];

export const tabsViews = {
  Classes: <ClassesTab />,
  CRM: <CRMTab />,
  Docs: <DocsTab />,
  Purchases: <PurchasesTab />,
  Requests: <RequestsTab />,
};
