import Header from 'components/Header';
import Posts from 'components/Posts';

export const revalidate = 1;

export default function ClubsPage() {

    return (
    <>
        <Header text="Clubs For Sale" />

        {/* <Filter /> */}
        <Posts />
    </>
    );
}
