import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';

/*const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`;*/

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as ('-' | '+'),
    amount: 0
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  return (
    <Layout>
      {selected.tags}
      <hr/>
      {selected.note}
      <hr/>
      {selected.category}
      <hr/>
      {selected.amount}
      <TagsSection value={selected.tags} onChange={(tags) => onChange({tags})}/>
      <NoteSection value={selected.note} onChange={(note) => onChange({note})}/>
      <CategorySection value={selected.category} onChange={(category) => onChange({category})}/>
      <NumberPadSection value={selected.amount} onChange={(amount) => onChange({amount})} onOk={() => {}}/>
    </Layout>

  );
}

export default Money;