import { Icon } from '@/components/common/Icon';
import { ListCard } from '@/components/common/ListCard';
import { Body1, Body2, Body3 } from '@/components/common/Typography';
import { useBookMarkList } from '@/hooks/api/bookmarks/useBookMarkList';
import { useAuth } from '@/hooks/auth/useAuth';

type Props = { onNext: (bookmarkId: number) => void };
export const BookmarkList = ({ onNext }: Props) => {
  const { token } = useAuth();
  const { data } = useBookMarkList(token);

  const handleBookmarkClick = (bookmarkId: number) => {
    onNext(bookmarkId);
  };
  return (
    <div>
      <Body1 className="my-4 mx-3" weight="semibold">
        나의 핀디 리스트
      </Body1>
      <ListCard>
        {data?.data.map((item, index) => (
          <>
            <div
              key={item.bookmarkId}
              onClick={() => handleBookmarkClick(item.bookmarkId)}
              className="flex flex-row justify-between items-center cursor-pointer"
            >
              <div className="flex flex-row gap-4 py-2.5 items-center justify-center">
                {item.youtuberProfile ? (
                  <img
                    src={item.youtuberProfile}
                    className="w-12 h-12 rounded-full"
                    alt={`${item.name}의 프로필 이미지`}
                  />
                ) : (
                  <Icon name="findy1" className="w-11 h-11" />
                )}
                <div className="flex flex-col py-1">
                  <Body2 weight="medium">{item.name}</Body2>
                  <div className="flex flex-row items-center gap-1">
                    <Icon name="location" size={15} />
                    <Body3 className=" text-gray-500">{item.markersCount}</Body3>
                  </div>
                </div>
              </div>
            </div>
            {index < data.data.length - 1 && <hr className="border-dashed pt-2" />}
          </>
        ))}
      </ListCard>
    </div>
  );
};
