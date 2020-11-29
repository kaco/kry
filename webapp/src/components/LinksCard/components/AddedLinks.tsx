import React from 'react';
import LinksList from '../../LinksList';
import { useMutation, useQuery } from "react-query";

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
    ).then((res) => res.json())
  );


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

  return <LinksList links={list} />;
};

export default AddedLinks;
