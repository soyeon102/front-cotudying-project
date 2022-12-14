import Header from '../components/Header';
import Layout from '../layout/Layout';
import StudyForm from '../components/StudyForm';
import styled from 'styled-components';

const CreatePage = () => {
  return (
    <>
      <Header />
      <Layout>
        <StudyForm />
      </Layout>
    </>
  );
};

export default CreatePage;
