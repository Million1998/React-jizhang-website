import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {useRecords} from '../hooks/useRecords';
import styled from 'styled-components';

/*const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`;*/

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as ('-' | '+'),
  amount: 0
};

const CategoryWrapper = styled.div`
      background:#c4c4c4;
`;

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = () => {
    addRecord(selected);
    setSelected(defaultFormData);
  };
  return (
    <Layout>
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={(note) => onChange({note})}/>
      <CategoryWrapper>
        <CategorySection value={selected.category}
                         onChange={(category) => onChange({category})}/>
      </CategoryWrapper>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}
                        onOk={submit}/>
    </Layout>

  );
}

export default Money;