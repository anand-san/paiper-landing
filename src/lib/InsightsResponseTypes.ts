export interface DemoLimits {
  message: string;
  data: {
    date: string;
    used: number;
    limit: number;
  };
}

export interface DemoResponse {
  message: string;
  data: {
    fileType: string;
    originalFileName: string;
    category: string;
    subCategory: string;
    summary: string;
    year: number;
    tags: string[];
    suggestedFileName: string;
    primaryInsight: {
      key: string;
      value: string;
    };
    additionalInsights: Array<{
      key: string;
      value: string;
    }>;
    actionItems: Array<{
      action: string;
      due_date: string;
      priority: string;
    }>;
    keyInformation: {
      dates: {
        due_date: string;
        end_date: string;
        issue_date: string;
        start_date: string;
      };
      amounts: {
        tax: number | null;
        total: number | null;
        subtotal: number | null;
      };
      parties: Array<{
        name: string;
        role: string;
        address: string;
        identifiers: Array<{
          type: string;
          value: string;
        }>;
      }>;
      key_terms: Array<{
        term: string;
        description: string;
      }>;
      payment_info: {
        bsb: string;
        bank_name: string;
        swift_code: string;
        account_name: string;
        account_number: string;
      };
    };
    expenseTracking: {
      category: string;
      is_recurring: boolean | null;
      payment_method: string;
    };
    createdAt: string;
    updatedAt: string;
  };
}
