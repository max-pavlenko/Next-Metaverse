'use client'
import React, {useRef, useState} from 'react';
import PillSlider from "../../components/PillSlider";
import TitledDropdown from "../../components/TitledDropdown";
import JsxSlider from "../../components/JSXSlider";

const SORT_DIRECTIONS = {
   DEFAULT: '',
   ASC: 'asc',
   DESC: 'desc'
}
const TestPage = () => {
   const INITIAL_TABLE = {
      title: [{title: 'price 1', }, {title: 'desc 2', }, {title: 'rand 3', }, {title: 'job 4', }],
      body: [{one: 1, two: 'bb', three: 3, fourth: 4}, {one: 1, two: 'aa', three: 4, fourth: 5,}, {one: 5, two: 'cc', three: 1, fourth: 2}],
      footer: ['s', 2, 5, 9]
   };
   Object.entries(INITIAL_TABLE.body[0]).forEach(([key, value], i) => {
      INITIAL_TABLE.title[i].propToSort = key;
   })
   const [sortedTableData, setSortedTableData] = useState({...INITIAL_TABLE});
   const [sortDirection, setSortDirection] = useState(SORT_DIRECTIONS.DEFAULT);
   const sortedTitleRef = useRef('');

   function handleSortTable(title, prop) {
      let newSortDir = SORT_DIRECTIONS.DEFAULT;
      switch (sortDirection) {
         case SORT_DIRECTIONS.DEFAULT:
            newSortDir = SORT_DIRECTIONS.ASC
            break;
         case SORT_DIRECTIONS.ASC:
            newSortDir = SORT_DIRECTIONS.DESC
            break
         case SORT_DIRECTIONS.DESC:
            newSortDir = SORT_DIRECTIONS.DEFAULT
            break;
         default: {
         }
      }
      newSortDir = sortedTitleRef.current !== title ? SORT_DIRECTIONS.ASC : newSortDir;
      console.log(newSortDir, sortedTitleRef.current, title)

      let newSortedTableData = {...INITIAL_TABLE};
      if (!newSortDir) {
         newSortedTableData.body = INITIAL_TABLE.body
      } else {
         newSortedTableData.body.sort((a, b) => {
            const comparedValue = typeof a[prop] === 'number' ? (a[prop] - b[prop]) : a[prop].localeCompare(b[prop])
            console.log(a, prop)
            return (newSortDir === SORT_DIRECTIONS.DESC ? -1 : 1) * comparedValue;
         })
      }
      sortedTitleRef.current = title;
      setSortDirection(newSortDir);
      setSortedTableData(newSortedTableData);
   }

function Rectangle({color}){
      return <div style={{width: 300, height: 200, backgroundColor: color || 'coral'}} />
}

   return (
       <div>
          <PillSlider/>
          <table style={{width: '100%'}}>
             <thead>
             <tr>
                {sortedTableData.title.map(({title, propToSort}, i, arr) => <th style={{width: `${1 / arr.length * 100}%`}} key={i} onClick={() => handleSortTable(title,propToSort, i)}>
                   {title} {sortDirection && sortedTitleRef.current === title ? sortDirection === SORT_DIRECTIONS.ASC ? 'Ascending' : 'Descending' : ''}
                </th>)}
             </tr>
             </thead>

             <tbody>
             {sortedTableData.body.map((item, i) => <tr key={i}>
                {Object.entries(item).map(([key, value]) => <td key={value}>{value}</td>)}
             </tr>)}
             </tbody>

          </table>
          <TitledDropdown data={[
              {title: '1', variants: ['a', 'b', 'c', 'd'], },
              {title: '2', variants: ['aa', 'bb', 'cc', 'dd'], },
              {title: '3', variants: ['aaa', 'bbb', 'ccc', 'ddd'], },
              {title: '4', variants: ['r', 'e', 'w', 'q'], },
              {title: '5', variants: ['qq', 'ww', 'ee', 'rr'], },
              {title: '6', variants: ['v', 'c', 'x', 'z'], },
              {title: '7', variants: ['vv', 'cc', 'xx', 'zz'], },
              {title: '8', variants: ['4', '3', '2', '1'], },
          ]}/>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <JsxSlider initialSlides={[<Rectangle color='red'/>, <Rectangle color='cyan'/>, <Rectangle color='violet'/>]}/>
       </div>
   );
};

export default TestPage;