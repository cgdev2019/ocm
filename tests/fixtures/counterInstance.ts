import type {
  CounterInstanceDto,
  CounterInstanceFormValues,
  CounterInstanceListItem,
  CounterInstanceListResponse,
  CounterPeriodDto,
} from '@/features/counter-instances/types';

export const counterPeriodDtoFixture: CounterPeriodDto = {
  id: 9001,
  code: 'PER-001',
  counterType: 'USAGE',
  level: 1,
  periodStartDate: '2024-01-01T00:00:00Z',
  periodEndDate: '2024-01-31T23:59:59Z',
  value: 120,
  accumulator: true,
  accumulatorType: 'MULTI_VALUE',
  accumulatedValues: {
    voice: 80,
    data: 40,
  },
};

export const counterInstanceDtoFixture: CounterInstanceDto = {
  id: 5001,
  code: 'CINST-001',
  counterTemplateCode: 'CT-001',
  chargeInstanceCode: 'CHG-001',
  productCode: 'PROD-001',
  userAccountCode: 'UA-001',
  customerAccountCode: 'CA-001',
  billingAccountCode: 'BA-001',
  subscriptionCode: 'SUB-001',
  counterPeriods: [counterPeriodDtoFixture],
};

export const counterInstanceFormFixture: CounterInstanceFormValues = {
  id: 5001,
  code: 'CINST-001',
  counterTemplateCode: 'CT-001',
  chargeInstanceCode: 'CHG-001',
  productCode: 'PROD-001',
  userAccountCode: 'UA-001',
  customerAccountCode: 'CA-001',
  billingAccountCode: 'BA-001',
  subscriptionCode: 'SUB-001',
  counterPeriods: [
    {
      id: 9001,
      code: 'PER-001',
      counterType: 'USAGE',
      level: '1',
      periodStartDate: '2024-01-01T00:00:00Z',
      periodEndDate: '2024-01-31T23:59:59Z',
      value: '120',
      accumulator: true,
      accumulatorType: 'MULTI_VALUE',
      accumulatedValuesJson: '{"voice":80,"data":40}',
    },
  ],
};

export const counterInstanceListItemFixture: CounterInstanceListItem = {
  code: 'CINST-001',
  counterTemplateCode: 'CT-001',
  userAccountCode: 'UA-001',
  subscriptionCode: 'SUB-001',
  chargeInstanceCode: 'CHG-001',
  id: 5001,
  counterPeriodsCount: 1,
};

export const counterInstanceListResponseFixture: CounterInstanceListResponse = {
  actionStatus: { status: 'SUCCESS' },
  data: [counterInstanceDtoFixture],
  paging: { totalNumberOfRecords: 1 },
};

export const counterInstanceDetailFixture = counterInstanceFormFixture;
