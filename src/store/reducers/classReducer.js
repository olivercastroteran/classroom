const initState = {
  classes: [
    {
      id: '1',
      title: 'JavaScript Master',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos ducimus harum inventore aut provident.',
    },
    {
      id: '2',
      title: 'HTML-CSS Master',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos ducimus harum inventore aut provident.',
    },
    {
      id: '3',
      title: 'React.js Master',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos ducimus harum inventore aut provident.',
    },
    {
      id: '4',
      title: 'Sass Master',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos ducimus harum inventore aut provident.',
    },
  ],
};

const classReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_CLASS':
      console.log('created class', action.class);
      return state;
    case 'CREATE_CLASS_ERROR':
      console.log('created class error', action.err);
      return state;
    case 'DELETE_CLASS':
      console.log('deletedd class');
      return state;
    case 'DELETE_CLASS_ERROR':
      console.log('deletedd class error', action.err);
      return state;
    case 'UPDATED_CLASS':
      console.log('updated class');
      return state;
    case 'UPDATED_CLASS_ERROR':
      console.log('updated class error', action.err);
      return state;
    default:
      return state;
  }
};

export default classReducer;
