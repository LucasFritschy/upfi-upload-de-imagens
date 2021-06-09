import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

interface FetchImagesResponse {
  data: {
    id: string;
    title: string;
    description: string;
    url: string;
    ts: number;
  }[];
  after: string | null;
}

export default function Home(): JSX.Element {
  const fetchImages = async ({
    pageParam = null,
  }): Promise<FetchImagesResponse> => {
    const { data } = await api.get('api/images', {
      params: {
        after: pageParam,
      },
    });

    return data;
  };

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery('images', fetchImages, {
      getNextPageParam: ({ after }) => after || null,
    });

  const formattedData = useMemo(() => {
    return data?.pages.map(imageData => imageData.data).flat();
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && (
          <Button my={10} onClick={() => fetchNextPage()}>
            Carregar mais
          </Button>
        )}
      </Box>
    </>
  );
}
