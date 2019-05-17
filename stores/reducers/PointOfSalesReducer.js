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
    }
  ],
  currentSales: []
};

const PointOfSalesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'SET_CURRENT_SALES':
      return {
        ...state,
        currentSales: action.payload
      }
    default:
      return state
  }
};

export default PointOfSalesReducer;
