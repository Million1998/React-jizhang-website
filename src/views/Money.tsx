import Layout from '../components/Layout';
import React from 'react';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
/*const MyLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
`;*/

function Money() {

  return (
    <Layout>
      <TagsSection/>
      <NoteSection/>
      <CategorySection/>
      <NumberPadSection/>
    </Layout>

  );
}

export default Money;