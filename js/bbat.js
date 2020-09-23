/*
 * Author: Youssef Nassim
 * Date: 21 Sep 2020
 * 
 **/

(function() {
    var Sidebar = function() {
        function Sidebar() {
            console.log('Sidebar running...');
            // defaults
            this.sidebar = document.querySelector('.sidebar');
            this.toggleBtn = document.querySelector('.sidebar-toggle');
            this._isHidden = false;
        };
    
        var _proto = Sidebar.prototype;
    
        // Public methods
        _proto.toggle = function toggle() {
            return this._isHidden ? this.show() : this.hide();
        };
    
        _proto.hide = function hide() {
            this._isHidden = true;
            this.sidebar.classList.add('hidden');
        };
    
        _proto.show = function show() {
            this._isHidden = false;
            this.sidebar.classList.remove('hidden');
        };
    
        _proto.setHoverEvent = function _setHoverEvent () {
            var _this = this;
            this.sidebar.addEventListener('mouseover', function() {
                if(_this._isHidden && _this.toggleBtn.classList.contains('active')) {
                    _this.show();
                } 
            });
            this.sidebar.addEventListener('mouseout', function() {
                if(!_this._isHidden && _this.toggleBtn.classList.contains('active')) {
                    _this.hide();
                }
            });
        };
        
        _proto.setToggleBtn = function getToggleBtn(btn) {
            this.toggleBtn = btn;
        }
        
        return Sidebar;
    }();
    

   /**
   * ------------------------------------------------------------------------
   * Default demo (tmp)
   * ------------------------------------------------------------------------
   * setup event listeners...
   */
    var sidebar = new Sidebar();
    var main = document.querySelector('.main');
    
    sidebar.setHoverEvent();
    
    sidebar.toggleBtn.addEventListener('click', function() {
        if (sidebar.toggleBtn.classList.contains('active') 
            && main.classList.contains('open')) {
            sidebar.show();
            main.classList.remove('open');
        } else {
            sidebar.toggle();
            main.classList.toggle('open');
        }
    });

    // Scroll event to update header style
    window.addEventListener('scroll', function() {
        // Add header shadow
        this.scrollY > 10 ?
            document.querySelector('.main header').classList.add('fixed')   :
            document.querySelector('.main header').classList.remove('fixed');
    });

})();