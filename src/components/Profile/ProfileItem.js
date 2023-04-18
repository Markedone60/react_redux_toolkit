export default function ProfileItem( {url} ) {
  return (
    <li className="profile-item">
      <img className="profile-pic" src={url} alt="" />
    </li>
  )
}
