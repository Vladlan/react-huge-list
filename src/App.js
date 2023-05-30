import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import "./App.css";
// import InfiniteScroll from "react-infinite-scroller";
import { List } from "react-virtualized";
import { FixedSizeList } from "react-window";
import { useRef } from "react";
import { ViewportList } from "react-viewport-list";

// #1 Not working solution because of the large amount of data
// const data = new Array(10_000)
//   .fill()
//   .map((value, index) => ({
//     id: index,
//     title: faker.lorem.words(5),
//     body: faker.lorem.sentences(4),
//   }));
// function App() {
//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id} className="post">
//           <h3>
//             {item.title} - {item.id}
//           </h3>
//           <p>{item.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default App;

// #2 Working solution with react-infinite-scroller
// function App() {
//   const data = new Array(1000).fill().map((value, index) => ({
//     id: index,
//     name: faker.person.firstName(5),
//     body: faker.lorem.paragraph(8),
//   }));
//   const showItems = (posts) => {
//     const items = [];
//     for (let i = 0; i < records; i++) {
//       items.push(
//         <div className="post" key={posts[i].id}>
//           <h3>{`${posts[i].name} - ${posts[i].id}`}</h3>
//           <p>{posts[i].body}</p>
//         </div>
//       );
//     }
//     return items;
//   };
//   const itemsPerPage = 20;
//   const [hasMore, setHasMore] = useState(true);
//   const [records, setRecords] = useState(itemsPerPage);
//   const loadMore = () => {
//     if (records === data.length) {
//       setHasMore(false);
//     } else {
//       setTimeout(() => {
//         setRecords(records + itemsPerPage);
//       }, 200);
//     }
//   };
//   return (
//     <InfiniteScroll
//       pageStart={0}
//       loadMore={loadMore}
//       hasMore={hasMore}
//       loader={<h4 className="loader">Loading...</h4>}
//       useWindow={false}
//     >
//       {showItems(data)}
//     </InfiniteScroll>
//   );
// }
// export default App;

// #3 Working solution with react-virtualized
// function App() {
//   const data = new Array(1000).fill().map((value, id) => (({
//     id: id,
//     title: faker.lorem.words(5),
//     body: faker.lorem.sentences(8)
//   })))

//   const renderRow = ({ index, key, style }) => (
//     <div key={key} style={style} className="post">
//       <h3>{`${data[index].title}-${data[index].id}`}</h3>
//       <p>{data[index].body}</p>
//     </div>
//   )
//   return (
//     <List
//       width={1200}
//       height={700}
//       rowRenderer={renderRow}
//       rowCount={data.length}
//       rowHeight={150}
//     />
//   );
// }
// export default App;

// #4 Working solution with react-window
// function App() {
//   const data = new Array(1000).fill().map((value, id) => ({
//     id,
//     title: faker.lorem.words(5),
//     body: faker.lorem.sentences(8),
//   }));

//   const Row = ({ index, style }) => (
//     <div style={style} className="post">
//       <h3>{`${data[index].title}-${data[index].id}`}</h3>
//       <p>{data[index].body}</p>
//     </div>
//   );
//   return (
//     <FixedSizeList width={1400} height={700} itemCount={data.length} itemSize={140}>
//       {Row}
//     </FixedSizeList>
//   );
// }
// export default App;

// #5 Working solution with react-viewport-list
const App = () => {
  const ref = useRef(null);
  const items = new Array(1_000).fill().map((value, index) => ({
    id: index,
    name: faker.person.firstName(5),
    body: faker.lorem.paragraph(8),
  }));
  return (
    <div className="scroll-container" ref={ref}>
      <ViewportList viewportRef={ref} items={items}>
        {(item) => (
          <div key={item.id} className="post">
            <h3>
              {item.name} - {item.id}
            </h3>
            <p>{item.body}</p>
          </div>
        )}
      </ViewportList>
    </div>
  );
};
export default App;
