import React, { useState } from 'react';
import LinkFormFields from '../../LinkFormFields';
import { useMutation } from "react-query";

const PATTERN = /^((http|https|ftp):\/\/)/;

const AddedLinks: React.FC = () => {
  const [link, setLink] = useState({ name: '', url: ''});
  const [errorMessage, setErrorMessage] = useState('');

  const changeLinkField = (name: string, value: string) => {
    setErrorMessage('');
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
  });

  const isValid = (url: string) => PATTERN.test(url);

  const addLink = (text: string, url: string) => {
    if (isValid(url)) {
      addLinkMutation({
        text,
        url
      });
      setLink({ name: '', url: ''});
    } else {
      setErrorMessage('URL should contain http:// or https://')
    }
  };

  return (
    <LinkFormFields
      nameValue={link.name}
      onFieldChange={onFieldChange}
      urlValue={link.url}
      onEnter={addLink}
      errorMessage={errorMessage}
    />
  );
};

export default AddedLinks;
