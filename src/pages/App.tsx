import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Container, TextInput } from '../components';
import Images from '../components/Images';
import { RootState } from '../modules';
import { getImageThunk } from '../modules/imageSearch'

interface IForm {
  search: string;
}

function App() {
  const { data, loading, error } = useSelector((state: RootState) => state.imageSearch.imageInfo);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<IForm>({
    search: '',
  });

  const handleSubmit = useCallback(
    (e: React.KeyboardEvent) => {
      if(e.key === 'Enter') {
        const { search } = formData;
        dispatch(getImageThunk(search));
      }
  },[formData]);
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      const { value } = target;
      const name = target.getAttribute('name');
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name as string]: value,
      }));
    },
    [],
  );
  
  return (
    <Container>
      <StyledTextInput
        placeholder="Search!"
        onChange={handleInputChange}
        onKeyDown={handleSubmit}
        fluid
        name="search"
      />
      <Images images={data} />
    </Container>
  );
}

const StyledTextInput = styled(TextInput)`
  margin-top: 30px;
`;

export default App;
