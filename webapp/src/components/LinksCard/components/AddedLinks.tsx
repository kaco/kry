import React from 'react';
import LinksList from '../../LinksList';
import { useMutation, useQuery } from 'react-query';
import { sortBy } from 'lodash';

export interface Link {
  name: string;
  status: string
}

export interface Status {
  url: string;
  status: string;
  addTime: {
    epochSecond: number;
  }
}

const AddedLinks: React.FC = () => {
  const { data } = useQuery('linksList', () =>
    fetch(
      "http://localhost:8080/service"
    ).then((res) => res.json()),
  {
    // Refetch the data every second
    refetchInterval: 1000,
  });


  const [deleteLinkMutation] = useMutation(({ text }: any) => {
    return fetch('http://localhost:8080/service', {
      method: 'DELETE',
      body: JSON.stringify({
        name: text,
      })
    })
  })

  const deleteLink = (text: string) => {
    deleteLinkMutation({
      text,
    });
  };

  const list = data?.map((link: Link) => {
    const status: Status = JSON.parse(link.status)
    return ({
      name: link.name,
      id: status.addTime.epochSecond,
      url: status.url,
      onError: () => deleteLink(link.name),
      status: status.status,
    });
  });

  const sortedList = sortBy(list, 'id');

  return (
    <>
      {!!sortedList.length && <h2>Your added links</h2>}
      <LinksList links={sortedList} />
    </>
  );
};

export default AddedLinks;
