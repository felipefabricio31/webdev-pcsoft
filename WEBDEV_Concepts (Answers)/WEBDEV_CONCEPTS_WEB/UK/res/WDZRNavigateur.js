/*! 21.0.1.0 */
/*! VersionVI: 01A240063m x */
function WDZRNavigateur(n,t,i,r,u){if(arguments.length){WDTableZRNavigateur.prototype.constructor.apply(this,[n,t,i,r,[u[0],u[1],WDSelection.prototype.ms_nSelectionSimple]]);var f=u[2],e=u[3];this.m_tabCouleurFond=f;this.m_nNbLignesLogiquesParLignePhysique=e}}var WDZRRupture=WDRupture,WDZRAttribut=WDAttribut,WDZRLigne=WDLigne;WDZRNavigateur.prototype=new WDTableZRNavigateur;WDZRNavigateur.prototype.constructor=WDZRNavigateur;WDZRNavigateur.prototype.vbZR=function(){return!0};WDZRNavigateur.prototype._vNewColonne=WDZRAttribut;WDZRNavigateur.prototype._vNewAttributAutomatique=WDZRAttribut;WDZRNavigateur.prototype._vNewRupture=WDZRRupture;WDZRNavigateur.prototype._vLigne=WDZRLigne;WDZRNavigateur.prototype._vHTMLGenereLigne=function(n,t,i,r){this.__HTMLGenere(n,t,i,this.m_oElementsHTML,r)};WDZRNavigateur.prototype._voAppelPCodeSurLigne=function(n,t,i){try{return this.m_sAliasTableZRParent=this.m_sAliasChamp,this.oAppelSurLigneTableZR(this._nLigneLigneWL(n),t,[i])}finally{this.m_sAliasTableZRParent=null}};WDZRNavigateur.prototype._vsLitPropriete=function(n,t,i,r,u,f){switch(r){case this.XML_CHAMP_PROP_NUM_COULEURFOND:if(i.m_sCouleurFond!==undefined)return i.m_sCouleurFond;var e;return this.m_tabCouleurFond&&this.m_tabCouleurFond.length&&(e=this.m_tabCouleurFond[t%this.m_tabCouleurFond.length]),e!==undefined||f||(e="transparent"),e;default:return WDTableZRNavigateur.prototype._vsLitPropriete.apply(this,arguments)}};WDZRNavigateur.prototype._voHTMLParse=WDTableZRNavigateur.prototype.__tabHTMLParse;WDZRNavigateur.prototype._vbAvecCouleurDeFondSelection=clWDUtil.m_pfVideFalse;WDZRNavigateur.prototype._vnGetColSpanRupture=function(){return this.m_nNbLignesLogiquesParLignePhysique}