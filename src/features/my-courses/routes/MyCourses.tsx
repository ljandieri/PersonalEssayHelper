import VideoPlayer from '../components/VideoPlayer';

const videoJsOptions = {
  sources: [
    {
      src: '//vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4',
    },
  ],
};

export function MyCourses() {
  return (
    <>
      <h1 className="font-playfairDisplay text-xl italic text-secondary">My Courses</h1>
      <VideoPlayer options={videoJsOptions} />
    </>
  );
}
