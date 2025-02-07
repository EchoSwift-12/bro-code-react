// const List = () => {
// const fruits = ["apple", "orange", "banana", "pineapple"];   
// const listItems = fruits.map(f =><li>{f}</li> );
// fruits.sort();
// return<>
//  <ol>{listItems}</ol>
//  </>
// }
// export default List 

const ArrOfObjs = () =>{
    const Fru = [{id: 1, name: "apple", calories: 95},
                 {id: 1, name: "custardapple", calories: 45},
                 {id: 1, name: "pineapple", calories: 50},
    ];
    const listItems = Fru.map(fr => <li key = {fr.id} > {fr.name}</li> );
    return <ol>{listItems}</ol>
   }
   export default ArrOfObjs