import React from 'react';

interface Props {
  params: { id: number; photoID: number };
}

export default function PhotoPage({ params: { id, photoID } }: Props) {
  return (
    <div>
      PhotoPage {id} {photoID}
    </div>
  );
}
