import { StylesProvider } from "@chakra-ui/react";
import React from "react";
//import styles from "../../styles/Loadingex.module.css";
import coffee from '../../styles/coffeeCup.module.css'
//import styles from '../../styles/Home.module.css'
function Loading(props) {
    return (
        <div className={coffee.center}>
            <div className={props.loading ? coffee.body_loading : coffee.none}>
                <div className={coffee.body}>
                    <div className={coffee.cup}>
                        <div className={coffee.handle}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;

// function Loading(props) {
//   return (
//     <div className={props.loading ? styles.body_loading : styles.none}>
//       <div
//         className={styles.lds_ellipsis}
//       >
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   );
// }

// export default Loading;