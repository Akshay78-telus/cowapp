export const cowFormConfig = [
  {
    key: 'earTag',
    type: 'input',
    label: 'Ear Tag',
    required: true,
    unique: true,
    inputType: 'number',
    validators: ['positive', 'unique']
  },
  {
    key: 'sex',
    type: 'dropdown',
    label: 'Gender',
    required: true,
    options: ['Male', 'Female']
  },
  {
    key: 'pen',
    type: 'input',
    label: 'Pen',
    required: true,
    inputType: 'text'
  },
  {
    key: 'status',
    type: 'dropdown',
    label: 'Status',
    required: true,
    defaultValue: 'Active',
    options: ['Active', 'In Treatment', 'Deceased']
  },
  {
    key: 'weight',
    type: 'input',
    label: 'Weight',
    inputType: 'number',
    required: false,
    validators: ['positive']
  }
];