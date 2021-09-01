// export default function coffeeCupLoader() {
//     return(
//         <>
//         <>
//         <h1> Hello World</h1>
//         </>
//         </>

//     )


// }

// import coffee from '../styles/coffeeCup.module.css'

// export default function Loader() {
//     return (
//         <div className={coffee.background}>
//         <h1>Hello World</h1>
//           <div className={coffee.cup}>
//           </div>
//           <div className={coffee.handle}>
//           </div>



//       </div>
//     )
// }

import coffee from '../../styles/coffeeCup.module.css'
//import CoffeeLoader from '../../components/coffeeCupLoad'
const LoadingCoffee = () => {
  function updateProgress() {
    var element = document.getElementById('MyprogressBar');
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
      if (width >= 100) {
        clearInterval(identity)
      } else {
        width++;
        element.style.width = width + '%'
      }
    }
  }

  return (
    <div>
    {/* <div className={coffee.body}> */}

      {/* <h1>Hello World</h1>
        <div className={coffee.cup}>
        <div className={coffee.handle}>
          </div>
        </div> */}
      <div className={coffee.Progress_Status}>
        <div className={coffee.MyProgressBar}> </div>

{/* <div id="Progress_Status">
  <div id="myprogressBar"></div> */}
      </div>



    </div>

  )
}
export default  LoadingCoffee
// export async function getServerSideProps() {
//     await new Promise((resolve) => {
//       setTimeout(resolve,3000)
//     }) 

//     return {
//       props: {},
//     };
//   }