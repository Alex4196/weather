import Swal from 'sweetalert2'
const initialState = [];


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_CITY":
            if (action.payload.name)    Swal.fire({
                title: 'City was successfully found',
                text: '',
                icon: 'success',
                confirmButtonText: 'Cool'
              });
            if (state.some(item => item.name === action.payload.name))   Swal.fire({
                title: ' city is already on the screen',
                text: '',
                icon: 'error',
                confirmButtonText: 'Cool'
              });
            else if (state.length >= 4) Swal.fire({
                title: ' no more than 4 cities are allowed',
                text: '',
                icon: 'error',
                confirmButtonText: 'Cool'
              });
            else if (!action.payload.name) Swal.fire({
                title: 'The city does not exist',
                text: '',
                icon: 'error',
                confirmButtonText: 'Cool'
              });
            else {
            return [
                ...state,
                action.payload
            ]}
            

        case "REMOVE_CITY":

            return  state.filter(city => city.id !== action.payload)

        default: return state;
    }
}


export default reducer;