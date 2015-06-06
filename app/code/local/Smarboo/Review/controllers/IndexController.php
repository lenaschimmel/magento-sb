<?php
class Smarboo_Review_IndexController extends Mage_Core_Controller_Front_Action
{
    public function indexAction()
    {

	$obj = Mage::getModel('catalog/product');
	$_product = $obj->load($_GET['id']);

	echo 
        //Get current layout state
        $this->loadLayout();          
 
        $block = $this->getLayout()->createBlock(
            'Mage_Core_Block_Template',
            'newpage',
            array('template' => 'smarboo_review/review.phtml')
        );
 		
        $this->getLayout()->getBlock('root')->setTemplate('page/1column.phtml');
        $this->getLayout()->getBlock('content')->append($block);
        $this->_initLayoutMessages('core/session'); 
        $this->renderLayout();



    }
}
?>
