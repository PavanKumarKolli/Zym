import React from 'react';
import "./Classes.css"
import { CategoriesContainer } from '../CategoriesContainer/CategoriesContainer';
export const Classes=()=>{
    return(
        <div>
             <div className="Classes_backgroundimg_container">
              <h1 className="classes-h1class">CLASSES DETAILS</h1>
            </div>
            <CategoriesContainer/>
        </div>
    )
}