export const laundrySteps = {
  sorting: [
    {
      id: 'whites',
      label: 'White Clothes',
      instructions: 'Put all white clothes together',
      imageUrl: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'colors',
      label: 'Colored Clothes',
      instructions: 'Group similar colors together',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'darks',
      label: 'Dark Clothes',
      instructions: 'Put dark clothes together',
      imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=500',
    },
  ],
  stains: [
    {
      id: 'food',
      label: 'Food Stains',
      instructions: 'Use cold water and stain remover. Gently rub the stain.',
      videoUrl: 'https://www.youtube.com/embed/watch?v=example1',
    },
    {
      id: 'dirt',
      label: 'Dirt Stains',
      instructions: 'Brush off loose dirt. Apply stain remover and wait 5 minutes.',
      videoUrl: 'https://www.youtube.com/embed/watch?v=example2',
    },
  ],
  detergent: [
    {
      id: 'powder',
      label: 'Powder Detergent',
      instructions: 'Use 2 tablespoons for a regular load',
      imageUrl: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'liquid',
      label: 'Liquid Detergent',
      instructions: 'Fill to line 2 on cap for regular load',
      imageUrl: 'https://images.unsplash.com/photo-1585670140670-7f76121fb30e?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'pods',
      label: 'Detergent Pods',
      instructions: 'Use 1 pod for regular load, 2 for large load',
      imageUrl: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=500',
    },
  ],
  washerSettings: [
    {
      id: 'normal',
      label: 'Regular Wash',
      instructions: 'Use for most clothes',
      temp: 'Warm',
      time: '45 minutes',
    },
    {
      id: 'delicate',
      label: 'Delicate Wash',
      instructions: 'Use for soft or thin clothes',
      temp: 'Cold',
      time: '30 minutes',
    },
  ],
  dryerSettings: [
    {
      id: 'normal',
      label: 'Normal Dry',
      instructions: 'Use for most clothes',
      temp: 'Medium',
      time: '60 minutes',
    },
    {
      id: 'delicate',
      label: 'Delicate Dry',
      instructions: 'Use for soft or thin clothes',
      temp: 'Low',
      time: '40 minutes',
    },
  ],
};

export const checkpoints = {
  washer: [
    'Water has stopped filling',
    'No more movement inside',
    'Timer shows 0:00',
    'Door unlocks',
  ],
  dryer: [
    'No tumbling sound',
    'Clothes feel warm',
    'Timer shows 0:00',
    'No wet spots when touched',
  ],
};

export const foldingGuides = [
  {
    id: 'shirts',
    label: 'T-Shirts',
    steps: [
      'Lay shirt flat',
      'Fold in half',
      'Fold sleeves in',
      'Fold bottom up twice',
    ],
  },
  {
    id: 'pants',
    label: 'Pants',
    steps: [
      'Lay pants flat',
      'Match legs together',
      'Fold in half lengthwise',
      'Fold bottom to top twice',
    ],
  },
];