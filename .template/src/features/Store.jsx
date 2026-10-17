import { createStore} from "redux";
import { initialBooks } from "./BookReducer.jsx";



const Store=createStore(initialBooks);
export default Store;