const Info = () => {
    return (
      <div className="grid grid-cols-3 gap-2.5 mb-8 justify-center">
        <div className="bg-[var(--container-color)] border border-[rgba(0,0,0,0.1)] rounded-lg text-center p-4 hover:transform hover:translate-y-[-25%] transition duration-300 ease-in-out hover:bg-[rgba(255,217,0,0.954)] hover:shadow-[rgba(255,229,83,0.938)_0px_13px_47px_-5px,rgba(0,0,0,0.3)_0px_8px_16px_-8px]">
          <i className='bx bx-award text-3xl text-[var(--title-color)] mb-2'></i>
          <h3 className="text-[var(--small-font-size)] font-medium">Experience</h3>
          <span className="text-[var(--tiny-font-size)]">Fresher</span>
        </div>
  
        <div className="bg-[var(--container-color)] border border-[rgba(0,0,0,0.1)] rounded-lg text-center p-4 hover:transform hover:translate-y-[-25%] transition duration-300 ease-in-out hover:bg-[rgba(0,208,255,0.954)] hover:shadow-[rgba(107,255,250,0.938)_0px_13px_47px_-5px,rgba(0,0,0,0.3)_0px_8px_16px_-8px]">
          <i className='bx bx-briefcase-alt text-3xl text-[var(--title-color)] mb-2'></i>
          <h3 className="text-[var(--small-font-size)] font-medium">Completed</h3>
          <span className="text-[var(--tiny-font-size)]">20+ Projects</span>
        </div>
  
        <div className="bg-[var(--container-color)] border border-[rgba(0,0,0,0.1)] rounded-lg text-center p-4 hover:transform hover:translate-y-[-25%] transition duration-300 ease-in-out hover:bg-[rgba(140,255,0,0.954)] hover:shadow-[rgba(140,255,0,0.693)_0px_13px_47px_-5px,rgba(0,0,0,0.3)_0px_8px_16px_-8px]">
          <i className='bx bx-support text-3xl text-[var(--title-color)] mb-2'></i>
          <h3 className="text-[var(--small-font-size)] font-medium">Support</h3>
          <span className="text-[var(--tiny-font-size)]">Online 24/7</span>
        </div>
      </div>
    );
  };
  export default Info;