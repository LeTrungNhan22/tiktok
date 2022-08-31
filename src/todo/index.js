import {useCallback, useMemo, useReducer, useRef, useState} from "react";
import {addJob, deleteJob, setJob} from "./actions";
import reducer, {initState} from "./reducer";
import logger from "./logger";

const orders = [100, 200, 300]

const gifts = ['CPU i9', 'RAm 32GB RGB', 'RGB keyboard',
   'Chúc bạn may mắn lần sau ']

const courses = [{
   id: 1, name: 'HTML,CSS'
}, {
   id: 2, name: 'C#'
}, {
   id: 3, name: 'JAVA'
},]
/*useReduce
* 1. Init state
* 2. Actions
* 3. Reduce
* 4. Dispatch
* */
//Init state
// const initState = 0;
//Action
//Reduce


function TodoApp() {
   /*
      const [counter, setCounter] = useState(() => {
         const total = orders.reduce(
            (total, cur) => total + cur);
         console.log(total);
         return total;

      });
   */
   /*  const handleIncrease = () => {
        setCounter(counter + 1);
     }
  */
   /*  const [info, setInfor] = useState({
        name: 'Nguyen Van A',
        age: 18,
        address: 'TP.HCM'
     })
  */
   /*  const handleUpdate = () => {
        setInfor({
           ...info,
           bio: 'love cars'
        })
     }
  */
   /* const [gift, setGift] = useState();
 */
   /*   const randomGift = () => {
         const index = Math.floor(Math.random() * gifts.length);
         setGift(gifts[index]);
      }*/
   /*   const [checked, setChecked] = useState([]);

      const handleSubmit = () => {
         console.log({ids: checked})

      }
      const handleCheck = (id) => {
         setChecked(prevState => {
            const isChecked = checked.includes(id)
            if (isChecked) {
               return checked.filter(item => item !== id);
            } else {
               return [...prevState, id]
            }
         });
      }*/
   /*  const [job, setJob] = useState('');
     const [jobs, setJobs] = useState(() => {
        const localStore = JSON.parse(localStorage.getItem('jobs'))
        return localStore ?? [];
     });

     function handleSubmit() {
        setJobs(prevState => {
           const newJobs = [...prevState, job];
           const jsonJobs = JSON.stringify(newJobs);
           localStorage.setItem('jobs', jsonJobs);
           return newJobs;
        });
        setJob('');

     }

     function handleClear() {
        localStorage.removeItem('jobs')
        setJobs([]);

     }*/
   /*

      const [show, setShow] = useState(false);
   */
   /*
      const [count, setCount] = useState(0);

      const handleIncrease = useCallback(() => {
         setCount(prevState => prevState + 1)
      }, []);
   */
   /*  const [name, setName] = useState('');
     const [price, setPrice] = useState('');
     const [products, setProducts] = useState([])

     const nameRef = useRef();

     const handleSubmit = () => {
        setProducts([...products, {
           name,
           price: +price
        }])
        setName('');
        setPrice('');
        nameRef.current.focus();
     }

     const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
           console.log('Tính toán lại...')
           return result + prod.price;
        }, 0)
        return result;
     }, [products])
  */
   /*  const [count, dispatch] = useReducer(reducer, initState);*/
   const [state, dispatch] = useReducer(logger(reducer), initState)
   const {job, jobs} = state
   const jobRef = useRef()
   const handleSubmit = () => {
      dispatch(addJob(job))
      dispatch(setJob(''))
      jobRef.current.focus()
   }
   return (
      <div className="App" style={{padding: '10px 32px'}}>
         {/*           <button onClick={() => setShow(!show)}>Toggle</button>
         {show && <Content/>}
         <Content
            onIncrease={handleIncrease}
         />
         <h1>{count}</h1>*/}
         {/*<input
            ref={nameRef}
            value={name}
            placeholder="Enter name..."
            onChange={e => setName(e.target.value)}
         ></input>
         <br/>
         <input
            value={price}
            placeholder="Enter price..."
            onChange={e => setPrice(e.target.value)}
         ></input>
         <br/>
         <button onClick={handleSubmit}>Add</button>
         <br/>
         Total:{total}
         <ul>
            {products.map((product, index) =>
               (<li key={index}>{product.name}-{product.price}</li>))}
         </ul>*/}
         {/*
         <h1>{count}</h1>
         <button onClick={() => dispatch(UP_ACTION)}>
            UP
         </button>

         <button onClick={() => dispatch(DOWN_ACTION)}>
            DOWN
         </button>*/}
         <h3>To do</h3>
         <input
            ref={jobRef}
            value={job}
            placeholder="Enter to do..."
            onChange={e => {
               // e.target.value
               dispatch(setJob(e.target.value))
            }}/>
         <button onClick={handleSubmit}>
            Add
         </button>
         <ul>
            {jobs.map((job, index) => (
               <li key={index}>{job}
                  <span onClick={() =>
                     dispatch(deleteJob(index))}> &times;
                  </span>
               </li>

            ))}
         </ul>
      </div>)
}

export default TodoApp
