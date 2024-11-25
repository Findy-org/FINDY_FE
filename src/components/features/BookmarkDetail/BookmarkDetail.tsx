import { useEffect } from 'react';
import { useAtom } from 'jotai';

import { Chip } from '@/components/common/Chip';
import { Icon } from '@/components/common/Icon';
import { ListCard } from '@/components/common/ListCard';
import { Body1, Body2, Body4 } from '@/components/common/Typography';
import { markersAtom } from '@/contexts/MarkerAtom';
import { useMarkerList } from '@/hooks/api/marker/useMarkerList';
import { useAuth } from '@/hooks/auth/useAuth';
import { Category } from '@/types/naver';

type Props = { bookmarkId: number; onPrev: () => void };
export const BookmarkDetail = ({ bookmarkId, onPrev }: Props) => {
  const { token } = useAuth();
  const { data } = useMarkerList(bookmarkId, token);
  const [, setMarkers] = useAtom(markersAtom);

  useEffect(() => {
    if (data?.markers?.data) {
      setMarkers(data.markers.data);
    }
  }, [data?.markers?.data, setMarkers]);

  return (
    <div>
      <div className="flex flex-row items-center">
        <Icon
          name="back"
          size={30}
          onClick={() => {
            setMarkers([]);
            onPrev();
          }}
          className="cursor-pointer"
        />
        <Body1 className="my-4 mx-3" weight="semibold" onClick={onPrev}>
          {data?.bookmarkName}의 핀디 리스트
        </Body1>
      </div>
      <ListCard>
        {data?.markers.data.map((item, index) => (
          <div key={item.markerId}>
            <div
              className={`flex flex-row justify-between items-center ${index !== data.markers.data.length - 1 && 'pb-2'}`}
            >
              <div className="flex flex-col gap-1 py-2">
                <div className="flex flex-row gap-3 items-center">
                  <Body2 className="text-primary">{item.title}</Body2>
                  {item.category && (
                    <Chip variant="medium">
                      {typeof item.category === 'object'
                        ? (item.category as Category).majorCategory
                        : item.category}
                    </Chip>
                  )}
                </div>
                <Body4 className="pt-1 " weight="normal">
                  {item.address}
                </Body4>
              </div>
            </div>
            {index < data.markers.data.length - 1 && <hr className="border-dashed pt-2" />}
          </div>
        ))}
      </ListCard>
    </div>
  );
};
