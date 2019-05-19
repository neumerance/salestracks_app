const INITIAL_STATE = {
  products: [
    {
      name: 'Roasted chicken',
      description: '',
      slug: 'roasted-chicken',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Pork belly',
      description: '',
      slug: 'pork-belly',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Chilly sauce',
      description: '',
      slug: 'chilly-sauce',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Chilly sauce',
      description: '',
      slug: 'chilly-sauce',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Roasted chicken 2',
      description: '',
      slug: 'roasted-chicken-2',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Pork belly 2',
      description: '',
      slug: 'pork-belly-2',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Chilly sauce 2',
      description: '',
      slug: 'chilly-sauce-2',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Chilly sauce 2',
      description: '',
      slug: 'chilly-sauce-2',
      image: 'https://via.placeholder.com/150'
    }
  ],
  unpaidItems: []
};

const PointOfSalesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'SET_UNPAID_ITEMS':
      return {
        ...state,
        unpaidItems: action.payload
      }
    default:
      return state
  }
};

export default PointOfSalesReducer;
