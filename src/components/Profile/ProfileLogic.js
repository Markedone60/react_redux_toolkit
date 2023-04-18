import { useDispatch, useSelector } from 'react-redux';
import { select } from '../../redux/profileSelectSlice';
import { upload } from '../../redux/profileUploadSlice';
import ProfileItem from './ProfileItem';

export default function ProfileLogic() {
  const dispatch = useDispatch();

  const picUpl = useSelector(state => state.profileSelect.value)
  const picSel = useSelector(state => state.profileUploader);

  const handleAdd = () => {
    dispatch(upload(picUpl));
  }

  const handleChange = (evt) => {
    dispatch(select(URL.createObjectURL(evt.target.files[0])));
  }

  return (
    <section className="profile-section">
      <div className='profile-lastpic'>
        
        <h2>Фото профиля</h2>

        <div>
          <img className="photo" src={picSel[0]} alt="" />
        </div>
      </div>
      <div className='profile-form'>
        <form className="form">
          <label className="form-label">
            <span className="form-text">Выбрать фото</span>
            <input className="form-photo" type="file" accept=".png, .jpg, .jpeg" onChange={handleChange} />
          </label>
          <button className="form-button" type="button" onClick={handleAdd}>Загрузить фото</button>
        </form>

        <h2>Все загруженные фото</h2>

        <ul className="profile-list">
          {picSel.map((a, i) => <ProfileItem key={i} url={a} />)}
        </ul>
      </div>
    </section>
  )
}
