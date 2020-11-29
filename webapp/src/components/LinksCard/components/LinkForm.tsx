import React, { useState } from 'react';
import LinkFormFields from '../../LinkFormFields';
import { useMutation } from "react-query";

const AddedLinks: React.FC = () => {
  const [link, setLink] = useState({ name: '', url: ''});

  const changeLinkField = (name: string, value: string) => {
    const newLink = {...link, [name]: value};
    setLink(newLink);
  };

  const onFieldChange = (name: string, value: string) => {
    changeLinkField(name, value);
  }

  const [addLinkMutation] = useMutation(({ text, url }: any) => {
    return fetch('http://localhost:8080/service', {
      method: 'POST',
      body: JSON.stringify({
        name: text,
        url: url
      })
    })
  })

  const addLink = (text: string, url: string) => {
    addLinkMutation({
      text,
      url
    });
    console.log(11, text, url)
  };

  return (
    <LinkFormFields
      nameValue={link.name}
      onFieldChange={onFieldChange}
      urlValue={link.url}
      onEnter={addLink}
    />
  );
};

export default AddedLinks;
