import React from 'react';
import { FadeLoader,} from "react-spinners";

const Loading = () => {
    return (
        <div className=' flex justify-center py-64'>
            <FadeLoader size={90}/>
        </div>
    );
};

export default Loading;