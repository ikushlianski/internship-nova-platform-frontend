import { ClassesTab } from '../ui/ClassesTab';
import { CRMTab } from '../ui/CRMTab';
import { DocsTab } from '../ui/DocsTab';
import { PurchasesTab } from '../ui/PurchasesTab';
import { RequestsTab } from '../ui/RequestsTab';

export const tabs = ['Classes', 'Requests', 'Purchases', 'Docs', 'CRM'];

export const tabsViews = {
  Classes: <ClassesTab />,
  CRM: <CRMTab />,
  Docs: <DocsTab />,
  Purchases: <PurchasesTab />,
  Requests: <RequestsTab />,
};
