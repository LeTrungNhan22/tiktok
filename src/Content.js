import {useEffect, useRef, useState} from "react";
import {memo} from "react";

/*
const tabs = ['posts', 'comments', 'albums']

*/

function Content({onIncrease}) {
   console.log('re-render')
   /*
      const [title, setTitle] = useState('');
      const [posts, setPosts] = useState([]);
      const [type, setType] = useState('posts');
      const [showGoToTop, setShowGotoTop] = useState(false);
   */
   /*
      useEffect(() => {

         console.log('title changed')
         fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(post => {
               setPosts(post);
            })
      }, [type])
      useEffect(() => {
         const handleScroll = () => {
            if (window.scrollY >= 200) {
               setShowGotoTop(true);
            } else {
               setShowGotoTop(false);
            }
         }

         window.addEventListener('scroll', handleScroll)

         return () => {
            window.removeEventListener('scroll', handleScroll)
         }

      }, [])
   */
   /*   const [width, setWidth] = useState(window.innerWidth)
      useEffect(() => {
         const handleResize = () => {
            setWidth(window.innerWidth);
         }
         window.addEventListener('resize', handleResize)
         return () => {
            window.removeEventListener('resize', handleResize)
         }
      }, [])*/
   /* const [countDown, setCountDown] = useState(180);
    console.log(countDown)
    useEffect(() => {

       const timerID = setInterval(() => {
          setCountDown(prevState => prevState - 1)
       }, 1000)
       //clean up func
       return () => {
          clearTimeout(timerID);
       }
    }, [])*/
   //cleanup
   /*
      const [avatarA, setAvatar] = useState();
      useEffect(() => {
         return () => {
            avatarA && URL.revokeObjectURL(avatarA.preview);
         }
      }, [avatarA])

      const handlePreviewAvatar = (event) => {
         const file = event.target.files[0];
         file.preview = URL.createObjectURL(file);
         setAvatar(file);
         console.log(URL.createObjectURL(file));
      }
   */
   /*
      const [count, setCount] = useState(60);

      const timerId = useRef();
      const prevCount = useRef();
      const h1Ref = useRef();
   */
   /*  useEffect(() => {
        prevCount.current = count;
     }, [count])

     useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect();
        console.log(rect);
     })
  */
   /*   const handleStart = () => {
         timerId.current = setInterval(() => {
            setCount(prevState => prevState - 1)
         }, 1000)
         console.log('start ->', timerId.current)

      }

      console.log(count, prevCount.current)
      const handleStop = () => {
         //clear interval truyền vào 1 id
         clearInterval(timerId.current);
         console.log('stop ->', timerId.current)
      }*/
   return (
      /*   <div>
            {tabs.map(tab => (
               <button
                  style={type === tab ? {
                     color: '#fff',
                     backgroundColor: '#333',
                  } : {}}
                  key={tab}
                  onClick={() => setType(tab)}
               >
                  {tab}
               </button>
            ))}
            <input
               value={title}
               onChange={event => setTitle(event.target.value)}
            />
            <ul>
               {posts.map(post => (
                     <li key={post.id}>{post.title || post.name}</li>
                  )
               )}
            </ul>

            {showGoToTop && (
               <button
                  style={{
                     position: 'fixed',
                     right: 20,
                     bottom: 20
                  }}
               >
                  TOP
               </button>
            )}
         </div>*/
      /* <div>
          <h1>{width}</h1>
       </div>*/
      /*  <div>
           <h1>{countDown}</h1>
        </div>*/
      /*<div>
         <input
            type="file"
            onChange={handlePreviewAvatar}
         />
         {avatarA && (<img src={avatarA.preview} alt="" width="80%"/>)}
      </div>*/
      /*      <div>
               <h1 ref={h1Ref}>{count}</h1>
               <button onClick={handleStart}>start</button>
               <button onClick={handleStop}>stop</button>
            </div>*/
      <>
         <button onClick={onIncrease}>Click me !</button>
         <h2>Hello </h2>
      </>
   )
}

export default memo(Content);