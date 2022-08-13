import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const CommonInput = (props) => {
  const {
    maxLength,
    title,
    id,
    type,
    value,
    name,
    onChange,
    placeholder,
    width,
    margin,
    ariaLabel,
    ariaDescribedby,
    controlId,
    label,
  } = props;
  return (
    <StInput>
      <StInputLabel controlId={controlId} label={label}>
        <StInputForm
          as="input"
          maxLength={maxLength}
          title={title}
          id={id}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          width={width}
          margin={margin}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
        />
      </StInputLabel>
    </StInput>
  );
};

export default CommonInput;

const StInput = styled.div``;

const StInputLabel = styled(FloatingLabel)``;

const StInputForm = styled(Form.Control)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: 8px;
  font-size: 16px;
  word-wrap: break-word;
  box-sizing: border-box;
  /* justify-content: center; */
  /* align-items: center; */
  /* display: flex; */
`;
