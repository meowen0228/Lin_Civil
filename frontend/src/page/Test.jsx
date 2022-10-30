import React from 'react';
import './Home.scss';

export default function Test() {
  const sideList = [{ listName: '電纜涵洞', path: '/atest' }];

  return (
    <div>
      {
        sideList.map((v) => (
          <div key={v.listName}>
            {v.listName}
          </div>
        ))
      }
    </div>
  );
}
