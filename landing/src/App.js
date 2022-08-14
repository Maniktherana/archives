import { Download, Features, SectionWrapper } from './components'; 
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="More than just gradients"
        description="View a growing number of stylish gradients and abstractions to add to your next project."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="A Nice User Interface"
        description="Experience a whole new way to create and manage your gradients. Create, edit, and share your gradients with the click of a button."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Built in Expo"
        mockupImg={assets.feature}
        banner="banner"
      />
      <SectionWrapper
        title="Creative way to showcase gradients"
        description="you can see stuff"
        mockupImg={assets.mockup}
        reverse
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "}
        <span className='bold'>Manik Rana</span>
        </p>
      </div>
    </>
    
  );
}

export default App;
