import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';

type Params = {
  id: string
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const Tag: React.FC = () => {
  const {tags} = useTags();
  let {id} = useParams<Params>();
  const tag = tags.filter(tag => tag.id === parseInt(id))[0];
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>

      </Topbar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名"/>
        </label>
      </div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  );
};

export {Tag};