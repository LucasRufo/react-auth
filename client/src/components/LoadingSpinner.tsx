import Loader from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <div className="w-full flex items-center justify-center">
      <Loader
        type="TailSpin"
        color="#3B82F6"
        height={100}
        width={100}
      />
    </div>
  )
}